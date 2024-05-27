import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Schedule`.
 */
export type ScheduleProps = SliceComponentProps<Content.ScheduleSlice>;

/**
 * Component for "Schedule" Slices.
 */
const Schedule = ({ slice }: ScheduleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for schedule (variation: {slice.variation}) Slices
    </section>
  );
};

export default Schedule;
