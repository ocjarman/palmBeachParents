import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { setRecommendations } from "../store/recommendationsSlice";
import { useDispatch } from "react-redux";

const SearchThingsToDo = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        term: "",
        location: "",
        radius: "",
        sort_by: "",
      }}
      validationSchema={Yup.object({
        term: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={async (values) => {
        let filteredSearch = await axios.put(
          "/api/recommendations/thingsToDo",
          values
        );
        dispatch(setRecommendations(filteredSearch.data.businesses));
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'center'
          }}
        >
          <Field name="term" type="text" placeholder="keyword(s)"></Field> {/**takes place of input**/}
          <ErrorMessage name="term"></ErrorMessage>
          <Field name="location" as="select">
            <option value={""} disabled>
              Location
            </option>
            <option>Boca Raton, FL</option>
            <option>Delray Beach, FL</option>
            <option>Boynton Beach, FL</option>
            <option>West Palm Beach, FL</option>
            <option>Fort Lauderdale, FL</option>
          </Field>
          <Field name="radius" as="select" type="number">
            <option value={""} disabled>
              Distance
            </option>
            <option value={8000}>5</option>
            <option value={16000}>10</option>
            <option value={24000}>15</option>
            <option value={32000}>20</option>
            <option value={40000}>25</option>
          </Field>
          <Field name="sort_by" as="select">
            <option value={""} disabled>
              Sort by
            </option>
            <option value={"rating"}>Rating</option>
            <option value={"best_match"}>Best Match</option>
            <option value={"review_count"}>Review Count</option>
          </Field>
          <button type="submit">Search</button>
        </form>
      )}
    </Formik>
  );
};

export default SearchThingsToDo;
