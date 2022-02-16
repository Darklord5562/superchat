fireObj.map(i => (
    <div className="m15">
        <div className="card">
            <div className="que">
                <p>
                    <span key={i.qnid}>{i.qn}</span>
                </p>
            </div>
        </div>
        <div className="box mt15">
            <ul className="answers">
                {i.options.map(item => (<li>{item}</li>))}
            </ul>
        </div>
        <button className="btn mt10 btn-md  btn-block">
            next
        </button>
    </div>
))