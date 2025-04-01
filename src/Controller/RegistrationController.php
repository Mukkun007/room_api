<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Hasher le mot de passe
            $hashedPassword = $passwordHasher->hashPassword($user, $form->get('plainPassword')->getData());
            $user->setPassword($hashedPassword);

            // Définir un rôle par défaut si l'utilisateur n'a pas sélectionné de rôle
            if (!$user->getRoles()) {
                $user->setRoles(['ROLE_VISITEUR']);
            }

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Inscription réussie ! Vous pouvez maintenant vous connecter.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('registration/register.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
