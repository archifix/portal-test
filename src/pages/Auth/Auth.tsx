import React from "react"
import PageLayout from "../../components/Layout/Layout"
import "../../ui/assets/styles/Auth.scss"

const Auth = () => {
  return (
    <PageLayout>
      <div className="form content-center">
        <input
          type="text"
          id="email"
          className="form__input"
          autoComplete="off"
          placeholder="Введите адрес электронной почты..."
        />
        <label htmlFor="email" className="form__label">
          EMAIL
        </label>
      </div>
    </PageLayout>
  )
}

export default Auth
