const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Los Angeles, CA"',
  },

  {
    input: 'self.interests',
    return: '["Distributed Computing", "Decentralized Networks", "Blockchain"]',
  },
  {
    input: 'self.education',
    return: '"B.Sc Computer Information Systems - Calfifornia Polytechnic State University, Pomona"',
  },
  {
    input: 'self.skills',
    return:
      '[ "Typescript", "Kubernetes", "Cloud Computing", "Next.JS", "Ansible", "Solidity", "DevOps", "Solutions Architecture"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/michael-hall-86616b17b/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/mah51">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://www.instagram.com/accounts/login/">Instagram</a>"]`,
  },
];

export default info;
