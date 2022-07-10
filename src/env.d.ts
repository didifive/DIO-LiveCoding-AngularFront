declare var process: {
  env: {
    NG_APP_ENV: string;
    // Replace the line below with your environment variable for better type checking
    [NG_APP_API_KEY: string]: any;
  };
};
