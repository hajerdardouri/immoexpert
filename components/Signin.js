const Signin = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle "/>
            <div class="modal py-60">
                <div class=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered"/>
                            </div>
                        <div class="form-control">
                            <label class="label">
                            <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered"/>
                            <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6 modal-action">
                            <button class=""><label for="my-modal" class="btn btn-base">Submit</label></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Signin

