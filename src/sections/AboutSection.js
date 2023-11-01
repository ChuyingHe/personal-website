import Badge from "react-bootstrap/Badge";
import about_data from "../data/data_en.json";
import { Col } from "react-bootstrap";
import Category from "../components/Category";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  const current_lng = i18n.language;
  const data_file_current_lng = i18n.getDataByLanguage(current_lng);
  const about_data_current_lng = data_file_current_lng.translation.data;

  return (
    <div>
      <h1 id="about">{t("internalization.section_1")}</h1>

      <Col>
        {about_data_current_lng.map((data) => {
          return <Category category={data} />;
        })}
      </Col>
      <Col></Col>
    </div>
  );
};

export default AboutSection;
