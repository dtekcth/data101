FROM pandoc/typst:3.11.0@sha256:ae9dfa3c58cae72d363484442993b761ff4bc30202ec12823bc1e59fa952c892 AS build_pdf
COPY ./src ./src
COPY ./typst ./typst
COPY ./typst_compile.sh ./typst_compile.sh
RUN ./typst_compile.sh

FROM peaceiris/mdbook:v0.4.40 AS build

WORKDIR /book

COPY --from=build_pdf /data/src/ ./src/
COPY ./theme ./theme
COPY ./book.toml ./

RUN mdbook build --dest-dir ./dest

FROM nginx:1.31-alpine@sha256:a3554c0d0b48177b1413c26e01f695334428020d9df01243fbae3e11cfd17417
COPY --from=build /book/dest /usr/share/nginx/html
