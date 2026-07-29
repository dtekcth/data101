FROM pandoc/typst:3.10.0@sha256:9eecb00186f3f108b8d3bda5171a3b4ba5dd991d80a78e489e73512ce3b3096e AS build_pdf
COPY ./src ./src
COPY ./typst ./typst
COPY ./typst_compile.sh ./typst_compile.sh
RUN ./typst_compile.sh

FROM peaceiris/mdbook:v0.5.0@sha256:8fb80148867b9e18e552f6b90aa0db52c25cb8899a647b383db8a74a6e6cd970 AS build

WORKDIR /book

COPY --from=build_pdf /data/src/ ./src/
COPY ./theme ./theme
COPY ./book.toml ./

RUN mdbook build --dest-dir ./dest

FROM nginx:1.31-alpine@sha256:4a73073bd557c65b759505da037898b61f1be6cbcc3c2c3aeac22d2a470c1752
COPY --from=build /book/dest /usr/share/nginx/html
