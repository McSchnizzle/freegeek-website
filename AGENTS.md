# Free Geek Website - Agent Instructions

This project is a new website for [Free Geek](https://freegeek.org), a Portland-based nonprofit focused on digital equity through technology reuse, distribution, and education.

## Issue Tracking with bd (beads)

**IMPORTANT**: This project uses **bd (beads)** for ALL issue tracking. Do NOT use markdown TODOs, task lists, or other tracking methods.

### Why bd?

- Dependency-aware: Track blockers and relationships between issues
- Git-friendly: Auto-syncs to JSONL for version control
- Agent-optimized: JSON output, ready work detection, discovered-from links
- Prevents duplicate tracking systems and confusion

### Quick Start

**Check for ready work:**
```bash
bd ready --json
```

**Create new issues:**
```bash
bd create "Issue title" -t bug|feature|task -p 0-4 --json
bd create "Issue title" -p 1 --deps discovered-from:bd-123 --json
bd create "Subtask" --parent <epic-id> --json  # Hierarchical subtask (gets ID like epic-id.1)
```

**Claim and update:**
```bash
bd update bd-42 --status in_progress --json
bd update bd-42 --priority 1 --json
```

**Complete work:**
```bash
bd close bd-42 --reason "Completed" --json
```

### Issue Types

- `bug` - Something broken
- `feature` - New functionality
- `task` - Work item (tests, docs, refactoring)
- `epic` - Large feature with subtasks
- `chore` - Maintenance (dependencies, tooling)

### Priorities

- `0` - Critical (security, data loss, broken builds)
- `1` - High (major features, important bugs)
- `2` - Medium (default, nice-to-have)
- `3` - Low (polish, optimization)
- `4` - Backlog (future ideas)

### Workflow for AI Agents

1. **Check ready work**: `bd ready` shows unblocked issues
2. **Claim your task**: `bd update <id> --status in_progress`
3. **Work on it**: Implement, test, document
4. **Discover new work?** Create linked issue:
   - `bd create "Found bug" -p 1 --deps discovered-from:<parent-id>`
5. **Complete**: `bd close <id> --reason "Done"`
6. **Commit together**: Always commit the `.beads/issues.jsonl` file together with the code changes so issue state stays in sync with code state

### Auto-Sync

bd automatically syncs with git:
- Exports to `.beads/issues.jsonl` after changes (5s debounce)
- Imports from JSONL when newer (e.g., after `git pull`)
- No manual export/import needed!

### Managing AI-Generated Planning Documents

AI assistants often create planning and design documents during development. Store ALL AI-generated planning/design docs in `history/` directory to keep the repository root clean.

### CLI Help

Run `bd <command> --help` to see all available flags for any command.

### Production Parity Audit Workflow

When working on any page, ensure feature parity with the production freegeek.org site. This prevents incomplete work and missing content.

**Before Building/Modifying a Page:**

1. **Fetch production content** - Use WebFetch to retrieve the corresponding page from freegeek.org
2. **Inventory what exists:**
   - Actual content (names, facts, contact details, specific data)
   - Trust signals (certifications, badges like i-SIGMA, NDIA, 100 Best)
   - CTAs and where they lead
   - Forms or interactive elements
   - Images and their purposes
3. **Create a checklist** of items that must be covered

**During Implementation:**

1. **Track covered vs deferred items** - Check off inventory items as implemented
2. **No silent placeholders** - If you use placeholder data (e.g., "Board Member 1"), immediately create a bd issue to populate with real data
3. **No silent skips** - If you skip something, create a bd issue explaining why and what's needed

**Before Marking Complete:**

1. **Parity check** - Does this page cover all essential content from production?
2. **i18n complete** - Are all strings in EN/ES? No hardcoded English?
3. **Links audit** - Are external links necessary, or should they be local pages?
4. **Placeholders audit** - Any placeholder content remaining? If so, issue created?
5. **Trust signals** - Are relevant certifications/badges displayed?

**Proactive Issue Creation:**

When you discover gaps, create bd issues immediately rather than leaving silent technical debt:
```bash
bd create --title="Populate [component] with real data" --type=task --priority=P1
bd create --title="Add missing [content] to [page]" --type=task --priority=P2
```

**Review Related History:**

Before starting work on a component/page, search for related past issues:
```bash
bd list --status=closed | grep -i [component-name]
bd show <id>  # Review what was done and why
```

This helps understand evolution, past decisions, and avoid repeating mistakes.

### Important Rules

- Use bd for ALL task tracking
- Always use `--json` flag for programmatic use
- Link discovered work with `discovered-from` dependencies
- Check `bd ready` before asking "what should I work on?"
- Store AI planning docs in `history/` directory
- Do NOT create markdown TODO lists
- Do NOT duplicate tracking systems
