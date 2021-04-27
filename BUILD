load("@rules_pkg//:pkg.bzl", "pkg_tar")

exports_files(["tsconfig.json"])

pkg_tar(
    name = "package",
    srcs = ["//stack:synth"],
    mode = "0755",
    package_dir = "/",
)
