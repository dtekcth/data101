FROM pandoc/typst:3.14.0@sha256:a4638042e306ab37439a44428383b687c9bc9f4f21fc68f8006e0d9bf9dc624a AS build_pdf
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

FROM nginx:1.31-alpine@sha256:fb4658584bd9a916ffb6f6e365f97c25cfdb2923801f551ea08356e695f14ff7
COPY --from=build /book/dest /usr/share/nginx/html
