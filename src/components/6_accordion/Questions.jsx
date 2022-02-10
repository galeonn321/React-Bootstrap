export const Questions = () => {
  return (
    <div className="container m-5 mx-auto" id="questions">
      <div className="accordion text-center" id="accordionExample">
        <h2 className="m-5">Frequent questions</h2>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Where are we?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>IN YOUR HEART</strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Odit, tempora deleniti nihil dolores
              ullam vero tempore facilis nemo quae vel repudiandae quisquam enim
              placeat totam autem laboriosam eaque? Labore aliquid hic
              consequatur impedit cum, nesciunt, voluptatem aspernatur pariatur
              neque magni obcaecati minus architecto recusandae quaerat
              molestiae quis adipisci quas voluptate?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Prices
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>YOUR BLOOD</strong> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Eaque, hic reiciendis repudiandae
              suscipit, non consectetur incidunt iste ea quae molestias eveniet
              veniam. Incidunt praesentium dignissimos rem error exercitationem
              dolore, dolorem sapiente voluptates necessitatibus blanditiis
              eligendi illum, nulla totam dicta in officiis vero nihil
              explicabo, odio molestiae nam facilis quasi. Mollitia quas ab
              nesciunt quidem, necessitatibus possimus, expedita harum
              consectetur exercitationem dolore porro voluptates quod quisquam
              tenetur sequi ducimus ex libero. Ullam corrupti, placeat
              consectetur reiciendis earum iste non a optio.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What do I need to know?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>NOTHING REALLY</strong> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Laboriosam expedita, incidunt, fuga
              tempora nisi a sequi nesciunt, nobis minima repudiandae quo
              obcaecati aperiam! Porro illo modi nobis tempore provident iusto
              velit dolores fuga error dolor. Quos autem eum odio vitae suscipit
              iure nihil dolorem quo culpa a et explicabo, ea error
              exercitationem earum consectetur laborum nostrum saepe expedita!
              Cupiditate, molestias maiores illo reprehenderit explicabo
              voluptatibus? Veritatis consequatur fugit odit architecto?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
