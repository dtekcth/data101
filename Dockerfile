FROM pandoc/typst:3.7.0 AS build_pdf
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

FROM nginx:1.23-alpine
COPY --from=build /book/dest /usr/share/nginx/html
