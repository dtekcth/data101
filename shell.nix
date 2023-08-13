{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  name = "data101";
  buildInputs = [
    mdbook
  ];
}
