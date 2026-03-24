export const contactInfo = {
  address: '6806 South 1300 East',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84121',
  phone: '801.566.0500',
  fax: '801.568.9196',
  email: 'amy@sagesq.com',
  get fullAddress() {
    return `${this.address}, ${this.city}, ${this.state} ${this.zip}`
  },
}
