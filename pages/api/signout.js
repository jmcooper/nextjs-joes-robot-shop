import auth0 from '../../utils/auth0'

export default async function signout(req, res) {
  try {
    await auth0.handleLogout(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}