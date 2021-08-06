// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `repo-token` });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)
