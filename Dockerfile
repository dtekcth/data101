FROM pandoc/typst:3.11.0@sha256:ae9dfa3c58cae72d363484442993b761ff4bc30202ec12823bc1e59fa952c892 AS build_pdf
COPY ./src ./src
COPY ./typst ./typst
COPY ./typst_compile.sh ./typst_compile.sh
RUN ./typst_compile.sh

FROM peaceiris/mdbook:v0.5.0@sha256:214b0f7b35367aa3ebb6b663cb20fd1aa987f2b80cacffb7ec39558992d621a4 AS build

WORKDIR /book

COPY --from=build_pdf /data/src/ ./src/
COPY ./theme ./theme
COPY ./book.toml ./

RUN mdbook build --dest-dir ./dest

FROM nginx:1.31-alpine@sha256:72ba65eb42c10344912a84ff42408db7d34f2feb642204570ab8fc5ffd29f1d3
COPY --from=build /book/dest /usr/share/nginx/html
