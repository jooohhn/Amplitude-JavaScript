module.exports = {
  "branches": ["build-pipeline", "@TODO_REPLACE_THIS"],
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      }
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "angular",
      
    }],
    ["@semantic-release/npm", {
      "npmPublish": true,
      "tarballDir": "dist",
    }],
    ["@semantic-release/github", {
      "assets": "amplitude*min.js"
    }],
    ["@semantic-release/git", {
      "assets": ["package.json, src/amplitude-snippet.js"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
  ],
}