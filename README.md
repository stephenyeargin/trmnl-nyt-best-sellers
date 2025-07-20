# New York Times Best Sellers for TRMNL

[![Build and Deploy](https://github.com/stephenyeargin/trmnl-nyt-best-sellers/actions/workflows/build.yml/badge.svg)](https://github.com/stephenyeargin/trmnl-nyt-best-sellers/actions/workflows/build.yml)

![promo](assets/promo.png)

### Screenshots

![Cover View](assets/screenshot.png)

![List View](assets/screenshot-2.png)

## Development

### Releasing

This project uses automated releases based on the `VERSION` file. To create a new release:

1. Update the version using the bump script:
   ```bash
   ./bin/bump-version [major|minor|patch]
   ```

2. Commit and push the version change:
   ```bash
   git add VERSION
   git commit -m "Bump version to X.Y.Z"
   git push origin main
   ```

3. The GitHub Action will automatically:
   - Create a git tag for the new version
   - Generate release notes from commits
   - Create a GitHub release
   - Deploy to TRMNL using `trmnlp push`

### Manual Development

For local development and testing:

```bash
# Install dependencies
bundle install

# Build the plugin
bundle exec trmnlp build

# Push to TRMNL (requires API key configuration)
bundle exec trmnlp push
```