module.exports = {
  ci: {
    collect: {
      startServerCommand: "npx serve -s frontend/build -l 3000",
      url: [
        "http://localhost:3000"
      ],
      numberOfRuns: 1
    },

    assert: {
      assertions: {
        "categories:performance": [
          "warn",
          {
            minScore: 0.5
          }
        ],
        "categories:accessibility": [
          "warn",
          {
            minScore: 0.5
          }
        ],
        "categories:best-practices": [
          "warn",
          {
            minScore: 0.5
          }
        ]
      }
    },

    upload: {
      target: "temporary-public-storage"
    }
  }
};