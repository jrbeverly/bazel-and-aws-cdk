load("@rules_pkg//:pkg.bzl", "pkg_tar")

exports_files(["tsconfig.json"])

pkg_tar(
    name = "cfn",
    srcs = ["//stack:stacks"],
    mode = "0755",
    package_dir = "/",
)
