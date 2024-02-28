"use client";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function UpdateActivity(list) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className='form-control'>
        <label className='label cursor-pointer gap-2'>
          <Checkbox
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
          ></Checkbox>
        </label>
      </div>
    </div>
  );
}
