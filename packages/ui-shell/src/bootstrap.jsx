import React from 'react';
import { createRoot } from "react-dom/client";
import Button from "./Button";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Button>this is button</Button>);