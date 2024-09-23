export async function getAge() {
  const res = await fetch('https://api.zanedb.com/api/age')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()
  return json.age
}
