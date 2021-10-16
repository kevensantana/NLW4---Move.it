import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengBox.module.css';

export function ChallengBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resertCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resertCountdown();
    }

    function handleChallengeFaild(){
        resetChallenge();
        resertCountdown();
    }



    return(
        <div className={styles.challengBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                         <button 
                             type="button"
                             className={styles.challengeFailedButton}
                             onClick={handleChallengeFaild}
                         >
                            Falhei      
                         </button>

                         <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                         >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio.</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Up"/> 
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}