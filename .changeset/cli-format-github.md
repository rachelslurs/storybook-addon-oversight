---
'oversight-lint': minor
---

Add `--format <text|json|github>`. The new `github` format emits GitHub Actions workflow-command annotations (`::error`/`::warning`/`::notice`, titled `oversight/<rule>` and anchored to the stories file) so findings show inline on a pull request's Files-changed tab. `--json` now aliases `--format json`; findings have no line numbers, so annotations attach at the top of the stories file, capped at GitHub's ~10-per-type-per-step limit.
