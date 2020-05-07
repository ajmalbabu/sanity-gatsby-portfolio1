export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3868d78f00273876bae59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio1-studio-pu4wmtf5',
                  apiId: 'e69ce8dd-5cf3-484a-8615-1acdbf8134e8'
                },
                {
                  buildHookId: '5eb3868daccacaddd7cff547',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio1-web-zxkiu5yu',
                  apiId: '0f23f3ad-2ad7-470b-be60-b450bc9efc67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalbabu/sanity-gatsby-portfolio1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio1-web-zxkiu5yu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
