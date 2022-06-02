![Growledge](/assets/growledge.png)

# Course Marketplace DApp

**Growledge** is a course marketplace. To view the courses and interact with the marketplace, you must install the MetaMask extension. Then connect with the wallet and select the Ropsten network; you can see the course details, purchase, repurchase and watch the course. The administrator will be able to activate, deactivate the courses purchased by the user.

# Contents

1. [Tech Stack](#tech-stack)
2. [Features](#features)
   - [User can](#user-can)
   - [Admin can](#admin-can)
3. [Screenshots](#screenshots)
4. [Feedback](#feedback)

## Tech Stack

**Client:** Next.js, web3.js, SWR, Context, Tailwind

**Contract:** Solidity

**Dev Tools:** Ganache, Truffle, Remix.

**Testing:** Mocha

## Features

### User can

- See course details
- Purchase a course
- Watch the course
- Re-purchase a course

### Admin can

- Validate who owns a course
- Activate/Deactivate a course
- Filter between purchased, activated and deactivated courses

## Running Tests

To run tests, run the following command

```bash
  ## make sure Ganache is running
  truffle test
```

## Screenshots

### Home Page

![Home Page](/docs/home-page.png)

### Marketplace Page

![Marketplace Page](/docs/marketplace-page.png)

### Course Page

![Course Page](/docs/course-page-p1.png)
![Course Page](/docs/course-page-p2.png)

### Payment Modal

![Payment Modal](/docs/payment-modal.png)

### My Courses Page

![My Courses Page](/docs/my-courses-page.png)

### Manage Courses Page

![Manage Courses Page](/docs/manage-courses-page.png)
## Feedback

Create an issue to discuss it.
