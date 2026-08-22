FROM pandoc/typst:3.10.0@sha256:9eecb00186f3f108b8d3bda5171a3b4ba5dd991d80a78e489e73512ce3b3096e AS build_pdf
COPY ./src ./src
COPY ./typst ./typst
COPY ./typst_compile.sh ./typst_compile.sh
RUN ./typst_compile.sh

FROM peaceiris/mdbook:v0.5.0@sha256:c4d5a1b75b1ec1716da53c43524aae9186f35e2cfa52654626e727ddbbe79e1e AS build

WORKDIR /book

COPY --from=build_pdf /data/src/ ./src/
COPY ./theme ./theme
COPY ./book.toml ./

RUN mdbook build --dest-dir ./dest

FROM nginx:1.31-alpine@sha256:db35bfc6b2951e7f8a72db5db120288c127ffaeeb4a6d4b95a26fead017d5913
COPY --from=build /book/dest /usr/share/nginx/html
