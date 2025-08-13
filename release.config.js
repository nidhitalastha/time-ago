module.exports = {
  branches: ["main"], // release only from main
  plugins: [
    "@semantic-release/commit-analyzer", // decide bump type based on commit messages
    "@semantic-release/release-notes-generator", // auto-generate changelog
    "@semantic-release/changelog", // update CHANGELOG.md
    "@semantic-release/npm", // publish to npm
    "@semantic-release/github", // create GitHub release
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
