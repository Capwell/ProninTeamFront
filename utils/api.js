const api = {
  url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,

  async sendOffer(data) {
    let res = await fetch(`${this.url}/offers/`, {
      method: "POST",
      body: data,
    })

    return this._handleResponse(res)
  },

  async getMainCase() {
    let res = await fetch(`${this.url}/cases/main_page/`, {
      method: "GET"
    })

    return this._handleResponse(res)
  },

  async getCases() {
    let res = await fetch(`${this.url}/cases/`, {
      method: "GET"
    })

    return this._handleResponse(res)
  },

  async getTeam() {
    let res = await fetch(`${this.url}/users/`, {
      method: "GET"
    })

    return this._handleResponse(res)
  },

  _handleResponse(res) {
    if (res.ok) return res.json()
    // если ошибка, отклоняем промис
    else return Promise.reject(`Ошибка: ${res.status}`)
  }
}

export default api