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
          "error",
          {
            minScore: 0.5
          }
        ],
        "categories:accessibility": [
          "error",
          {
            minScore: 0.5
          }
        ],
        "categories:best-practices": [
          "error",
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