import "./Buttons.css";
export default function Buttons({ onButtonClick }) {
  return (
    <div class="buttons">
      <button class="button number" onClick={onButtonClick}>
        1
      </button>
      <button class="button number" onClick={onButtonClick}>
        2
      </button>
      <button class="button operator" onClick={onButtonClick}>
        +
      </button>
      <button class="button number" onClick={onButtonClick}>
        3
      </button>
      <button class="button number" onClick={onButtonClick}>
        4
      </button>
      <button class="button operator" onClick={onButtonClick}>
        -
      </button>
      <button class="button number" onClick={onButtonClick}>
        5
      </button>
      <button class="button number" onClick={onButtonClick}>
        6
      </button>
      <button class="button operator" onClick={onButtonClick}>
        *
      </button>
      <button class="button number" onClick={onButtonClick}>
        7
      </button>
      <button class="button number" onClick={onButtonClick}>
        8
      </button>
      <button class="button operator" onClick={onButtonClick}>
        /
      </button>{" "}
       
      <button class="button number" onClick={onButtonClick}>
        9{" "}
      </button>
      <button class="button number" onClick={onButtonClick}>
        0
      </button>
      <button class="button operator" onClick={onButtonClick}>
        %
      </button>{" "}
       
      <button class="button clear" onClick={onButtonClick}>
        C
      </button>
      <button class="button" onClick={onButtonClick}>
        .
      </button>{" "}
       
      <button class="button equal" onClick={onButtonClick}>
        =
      </button>
    </div>
  );
}
