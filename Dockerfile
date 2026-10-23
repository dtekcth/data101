FROM pandoc/typst:3.7.0@sha256:105216408596d99f0058c34cea74efcf2cd9f438070ffed956ab8f02233e2f00 AS build_pdf
COPY ./src ./src
COPY ./typst ./typst
COPY ./typst_compile.sh ./typst_compile.sh
RUN ./typst_compile.sh

FROM peaceiris/mdbook:v0.4.40@sha256:e3f3eeb890c0f9e0e665b0a006f0c334906924613513fbc8867bc0de3da490da AS build

WORKDIR /book

COPY --from=build_pdf /data/src/ ./src/
COPY ./theme ./theme
COPY ./book.toml ./

RUN mdbook build --dest-dir ./dest

FROM nginx:1.23-alpine@sha256:02ffd439b71d9ea9408e449b568f65c0bbbb94bebd8750f1d80231ab6496008e
COPY --from=build /book/dest /usr/share/nginx/html
