import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="24" cy="24" r="20" />
          <path d="M15 24l6 6 12-12" />
        </svg>
        <h3>Thank You</h3>
        <p>Your message has been sent. We will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <select id="title" name="title" className={styles.select}>
            <option value="">Select</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="altPhone" className={styles.label}>Alternate Phone</label>
          <input
            type="tel"
            id="altPhone"
            name="altPhone"
            className={styles.input}
          />
        </div>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>Preferred Contact Method</legend>
        <div className={styles.radioGroup}>
          <label className={styles.radio}>
            <input type="radio" name="preferredContact" value="phone" defaultChecked />
            <span>Phone</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name="preferredContact" value="email" />
            <span>Email</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name="preferredContact" value="either" />
            <span>Either</span>
          </label>
        </div>
      </fieldset>

      <div className={styles.field}>
        <label htmlFor="comments" className={styles.label}>Questions / Comments</label>
        <textarea
          id="comments"
          name="comments"
          rows={5}
          maxLength={4000}
          className={styles.textarea}
        />
      </div>

      <Button type="submit" variant="primary" size="lg">
        Send Message
      </Button>
    </form>
  )
}
