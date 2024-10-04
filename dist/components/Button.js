// src/components/Button.tsx
import React from 'react';
var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (React.createElement("button", { onClick: onClick, className: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" }, label));
};
export default Button;
