const Contact = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle " />
      <div className="modal py-60">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter your phone number </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6 modal-action">
              <button
                className="my-modal-6 btn btn-base"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;