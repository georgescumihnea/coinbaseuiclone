// app/components/RecaptchaBadge.tsx
import React from "react";

const RecaptchaBadge: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 m-4 p-2 bg-white rounded-lg shadow-lg flex items-center space-x-2 cursor-pointer hover:shadow-xl transition">
      <svg
        width="24"
        height="24"
        viewBox="0 0 150 130"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m117 62.063c-2e-3 -0.60232-0.0159-1.2014-0.0429-1.7976v-33.991l-9.3971 9.3971c-7.691-9.4141-19.391-15.427-32.496-15.427-13.638 0-25.754 6.5097-33.413 16.591l15.403 15.565c1.5095-2.7917 3.6539-5.1895 6.2395-7.0005 2.6891-2.0985 6.4993-3.8143 11.77-3.8143 0.63674 0 1.1282 0.0744 1.4893 0.21458 6.5304 0.51543 12.191 4.1194 15.524 9.3503l-10.903 10.903c13.81-0.0542 29.411-0.086 35.825 7e-3"
          style={{ fill: "#1c3aa9" }}
        />
        <path
          d="m74.819 20.246c-0.60232 2e-3 -1.2014 0.0159-1.7976 0.0429h-33.991l9.3971 9.3971c-9.4141 7.691-15.427 19.391-15.427 32.496 0 13.638 6.5098 25.754 16.591 33.413l15.565-15.403c-2.7917-1.5095-5.1895-3.6539-7.0005-6.2395-2.0984-2.6891-3.8143-6.4993-3.8143-11.77 0-0.63674 0.0744-1.1282 0.21458-1.4893 0.51543-6.5304 4.1194-12.191 9.3503-15.524l10.903 10.903c-0.0542-13.81-0.0861-29.411 7e-3 -35.825"
          style={{ fill: "#4285f4" }}
        />
        <path
          d="m33.002 62.181c2e-3 0.60232 0.0159 1.2014 0.0429 1.7976v33.991l9.3971-9.3971c7.691 9.4141 19.391 15.427 32.496 15.427 13.638 0 25.754-6.5097 33.413-16.591l-15.403-15.565c-1.5095 2.7917-3.6539 5.1895-6.2395 7.0005-2.6891 2.0985-6.4993 3.8143-11.77 3.8143-0.63674 0-1.1282-0.0744-1.4893-0.21458-6.5304-0.51543-12.191-4.1194-15.524-9.3503l10.903-10.903c-13.81 0.0542-29.411 0.086-35.825-7e-3"
          style={{ fill: "#ababab" }}
        />
      </svg>
      <div>
        <p className="text-sm font-semibold text-gray-800">reCAPTCHA</p>
        <p className="text-xs text-gray-500">Privacy - Terms</p>
      </div>
    </div>
  );
};

export default RecaptchaBadge;
