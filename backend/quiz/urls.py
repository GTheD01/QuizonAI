from django.urls import path

from quiz.views import GenerateMoreInformationsAboutTopicView, GenerateQuestionnaireView

urlpatterns = [
    path("", GenerateQuestionnaireView.as_view()),
    path("generate-more-info/", GenerateMoreInformationsAboutTopicView.as_view())
]