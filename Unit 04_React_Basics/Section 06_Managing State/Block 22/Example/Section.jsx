import { LevelContext } from './LevelContext.jsx';


export default function Section({ level, children }) {
    return (
        <section className="section">
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
    );
}
