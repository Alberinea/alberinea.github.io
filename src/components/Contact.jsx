import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xeqvbozj');

  return (
    <section id="contact" className="py-3">
      <div className="container flex flex-col">
        <h3 className="form-text text-center">
          Leave a message and I will get back to you as soon as I can
        </h3>
        <form className="form" onSubmit={handleSubmit}>
          {state.succeeded && (
            <div
              className="form-success"
              onClick={() => (state.succeeded = !state.succeeded)}
            >
              Message was sent successfully!
            </div>
          )}
          <ValidationError
            className="form-failure"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            className="form-failure"
            prefix="Name"
            field="name"
            errors={state.errors}
          />
          <ValidationError
            className="form-failure"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input
            required
            className="input form-input"
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
          />
          <input
            required
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail*"
          />
          <textarea
            required
            className="form-textarea"
            name="message"
            id="message"
            placeholder="Message*"
            cols="30"
            rows="3"
          />
          <button
            className="btn-outline-black"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
        <h3 className="form-text text-center">You can also call me at</h3>
        <h2 className="form-text text-center py-1 text-blue">099-4795329</h2>
      </div>
    </section>
  );
};

export default Contact;
