import BitrixJS, {
  BitrixConfig,
  ModeConfig,
} from "@sknebo/bitrix-js";


const config = {
  client_id: 'app.64ca30d63e4f67.05691336',
  client_secret: 'PEYejBxBY3Ildz9k8cQAmBvFrlxWp7UAMaUwQqQA81m0an0YCi',
}
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const domain = urlParams.get('DOMAIN') || ''
let bitrix = BitrixJS({
  mode: ModeConfig.OAuth,
  ...config,
  domain,
  https: true,
})

const tokens = {
  refresh_token: urlParams.get('REFRESH_ID') || '',
  expires_in: Number(urlParams.get('AUTH_EXPIRES')) || 0,
  access_token: urlParams.get('AUTH_ID') || '',
  member_id: urlParams.get('member_id') || '',
}

bitrix = BitrixJS({
  mode: ModeConfig.OAuth,
  ...config,
  https: true,
  refresh_token: tokens.refresh_token,
  expires_in: tokens.expires_in,
  access_token: tokens.access_token,
  domain: urlParams.get('DOMAIN') || '',
})

export default bitrix
