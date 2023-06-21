import Airtable from 'airtable'

const token = 'keyxbBGdpSsrZvjQ6'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

const base = Airtable.base('appGa6D8fpORCVjQE')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Post Teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        console.log(result)
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            keywords: record.fields['Keywords'],
            category: record.fields['Category'],
            topic: record.fields['Topic'],
            bg: record.fields['Background'],
            link: record.fields['Link'],
            icon: record.fields['Icon']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers }
