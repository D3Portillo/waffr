# WAFFR

# Code Style, Guides & Conventions

## 1. Imports

To help mainting and keep a consistent import sequence we'll separate them in 3 sections.

1. React and important libraries at the top (React imports are first liners).
2. External libraries assets or components as of Design System pieces.
3. Internal done components and assets (Please, assets at the very least).

```js
// React, important imports atop
import { useRouter } from "next/router";

// Second block is assets imports from external libs,
// or Design System componetns, in this example: react-icons
import { RiSendPlaneLine } from "react-icons/ri";
import { GiDiamondHard } from "react-icons/gi";

// Project only components and assets at the very end of block
import Profile from "@/components/Profile";
import MainLogo from "./MainLogo";
import RouteItem from "./RouteItem";

import logo from "@/assets/logo.svg";
```
