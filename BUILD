load("@rules_pkg//:pkg.bzl", "pkg_tar")
load("@build_bazel_rules_nodejs//:index.bzl", "npm_package_bin")
load("@npm//@bazel/typescript:index.bzl", "ts_library")

exports_files(["tsconfig.json"])

pkg_tar(
    name = "package",
    srcs = ["//stack:synth"],
    mode = "0755",
    package_dir = "/",
)

ts_library(
    name = "cfn",
    srcs = glob(["stack/**/*.ts"]),
    data = ["//:tsconfig.json"],
    visibility = ["//visibility:public"],
    deps = [
        "@npm//@aws-cdk/aws-iam",
        "@npm//@aws-cdk/aws-sns",
        "@npm//@aws-cdk/core",
        "@npm//@aws-cdk/cx-api",
        "@npm//@types/node",
        "@npm//@types/tar",
        "@npm//tar",
    ],
)

npm_package_bin(
    name = "synth",
    outs = [
        "cdk.out/authentication.template.json",
        "cdk.out/notifications.template.json",
    ],
    args = [
        "synth",
        "--output",
        "$(RULEDIR)/cdk.out",
        "-q",
        "--app",
        "$(RULEDIR)/stack.js",
    ],
    data = [
        "cfn",
        "@npm//:node_modules",
    ],
    link_workspace_root = 1,
    tool = "@npm//aws-cdk/bin:cdk",
    visibility = ["//visibility:public"],
)
