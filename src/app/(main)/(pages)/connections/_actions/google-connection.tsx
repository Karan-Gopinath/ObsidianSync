'use server'
import { clerkClient, createClerkClient } from '@clerk/clerk-sdk-node'
import { auth } from '@clerk/nextjs/server'
import { google } from 'googleapis'

export const getFileMetaData = async () => {
  'use server'

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URI
  )

  const { userId } = await auth()

  if (!userId) {
    return { message: 'User not found' }
  }

  // Get paginated response and extract the data
  const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
    userId,
    'google'
  )

  // Access the first token in the data array
  const accessToken = clerkResponse?.data[0]?.token

  if (!accessToken) {
    return { message: 'Access token not found' }
  }

  oauth2Client.setCredentials({
    access_token: accessToken,
  })

  const drive = google.drive({ version: 'v3', auth: oauth2Client })
  const response = await drive.files.list()

  if (response) {
    return response.data
  }

  return { message: 'No files found' }
}
