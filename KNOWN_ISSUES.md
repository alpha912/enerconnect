# Known Issues

This document tracks known issues, limitations, and planned improvements for ENERConnect.EU. Before reporting a new issue, please check if it's already listed here.

## Active Issues

### Critical

None at the moment.

### High Priority

- [ ] Authentication system needs to be implemented
- [ ] Data validation for JSON database entries
- [ ] Rate limiting for API endpoints
- [ ] Initial setup of Supabase integration requires proper configuration of environment variables
- [ ] Real-time subscriptions in Supabase may require additional setup
- [ ] Rate limiting needs to be configured in Supabase dashboard

### Medium Priority

- [ ] Dark mode transition animations
- [ ] Mobile navigation menu responsiveness
- [ ] Search functionality optimization
- [ ] Limited to publishing quality information only in JSON database
- [ ] Manual synchronization required between local and remote JSON database
- [ ] No real-time updates for JSON data
- [ ] Size limitations for JSON files on GitHub
- [ ] Potential lag between Supabase and JSON database updates
- [ ] Need to handle offline scenarios gracefully
- [ ] Cache invalidation strategies needed

### Low Priority

- [ ] Additional language support
- [ ] Enhanced error logging
- [ ] Performance optimization for large datasets

## Reporting New Issues

When reporting new issues, please use the following template:

```markdown
### Issue Description

**Type**: [Bug/Feature Request/Enhancement]
**Priority**: [Critical/High/Medium/Low]
**Affects Version**: [e.g., 0.1.0]

#### Current Behavior
[Describe what currently happens]

#### Expected Behavior
[Describe what you expected to happen]

#### Steps to Reproduce
1. [First Step]
2. [Second Step]
3. [Additional Steps...]

#### Environment
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Screen Resolution: [e.g., 1920x1080]

#### Additional Context
[Add any other context about the problem here]

#### Possible Solution
[Optional: Suggest a fix/reason for the bug]
```

## Issue Labels

We use the following labels to categorize issues:

- `critical`: Severe issues affecting core functionality
- `high`: Important issues that should be addressed soon
- `medium`: Issues that affect user experience but aren't blocking
- `low`: Nice-to-have improvements
- `bug`: Something isn't working as expected
- `enhancement`: New feature requests
- `documentation`: Documentation-related issues
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed

## Issue Lifecycle

1. **Open**: Issue is reported and awaiting triage
2. **Confirmed**: Issue has been validated and prioritized
3. **In Progress**: Work has begun on addressing the issue
4. **Review**: Solution is ready for review
5. **Resolved**: Issue has been fixed and verified
6. **Closed**: Issue is completed or no longer relevant

## Maintenance

This document is updated regularly as new issues are discovered and existing ones are resolved. Last updated: [Current Date]
