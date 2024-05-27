import { HeaderComponent } from "Components";
import FooterComponent from "Components/FooterComponent/FooterComponent";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export default function FullScreen() {
    return (
        <div style={{ overflow: "hidden" }}> {/* Применяем overflow: hidden к этому элементу */}
            <Layout> {/* Для предотвращения мигания скроллбара добавляем минимальную высоту */}
                <HeaderComponent />
                <Outlet />     
            </Layout>
        </div>
    );
}
