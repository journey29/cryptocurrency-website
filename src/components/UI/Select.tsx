import { ISelect } from "types"

type Props = {
    options: ISelect[],
    defaultValue: string
}

export const Select: React.FC<Props> = ({ options, defaultValue }) => {
    return (
        <select className="text-global-color-secondary p-3">
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

