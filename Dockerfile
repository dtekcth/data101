FROM peaceiris/mdbook:v0.4.40 as build

COPY ./theme ./theme
COPY ./book.toml ./
COPY ./src ./src

RUN mdbook build --dest-dir ./dest

FROM nginx:1.23-alpine
COPY --from=build /book/dest /usr/share/nginx/html
