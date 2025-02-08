## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Branching and Jira Integration](#branching-and-jira-integration)
- [Making Contributions](#making-contributions)
  - [Core Developers](#core-developers)
  - [Open-Source Contributors](#open-source-contributors)
- [Pull Requests & Merging](#pull-requests--merging)
- [Code Style & Best Practices](#code-style--best-practices)
- [Contact & Support](#contact--support)

Welcome to the O(1) Landing Page repository! We appreciate your contributions and have a structured workflow to keep development efficient and organized.

## Getting Started

Fork the repository (if you are an open-source contributor).

[GitHub's guide on forking a repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

Clone the repository directly (if you are a core developer).

`git clone https://github.com/O1SoftwareNetwork/o1_landing_page.git`

## Branching and Jira Integration

Our project integrates directly with Jira, so all branches must contain a Jira issue ID in the branch name. This ensures automatic tracking of progress.

Branch Naming Convention:

`{JIRA_ISSUE_ID}-short-description`

Example:

`jira-OLP-32-add-user-authentication`

When you create a branch using a valid Jira ID, the corresponding issue in Jira will automatically move to the In Progress status.

When the Pull Request (PR) with the Jira ID (in it's title) is merged, the issue will be moved to DONE in Jira.

## Making Contributions

### Core Developers

Core developers can create branches directly within the repository.

PRs can be made from these branches directly.

### Open-Source Contributors

Fork the repository before making changes.

Create a branch with the correct Jira ID format in your fork.

Submit a Pull Request (PR) to the main repository.

## Pull Requests & Merging

PRs must reference the Jira issue ID in the title and description.

Ensure all tests pass before requesting a review.

Follow the code style guidelines outlined below.

## Code Style & Best Practices

Follow SOLID principles.

Use meaningful commit messages.

Maintain consistency in formatting (run eslint or prettier before pushing changes).

### Contact & Support

If you have any questions, feel free to ask in the Discussions tab or open an issue.

Thank you for contributing to the O(1) Landing Page!
